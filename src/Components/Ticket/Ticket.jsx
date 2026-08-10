import { useEffect, useMemo, useState } from "react";
import {
  getTickets,
  getUsers,
  createTicket,
  updateTicket,
} from "../../api";

const STATUS = [
  "OPEN",
  "IN_PROGRESS",
  "IN_REVIEW",
  "COMPLETED",
  "BLOCKED",
];

const PRIORITIES = ["LOW", "MEDIUM", "HIGH", "URGENT"];

function Ticket() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const [showCreate, setShowCreate] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [filterDeveloper, setFilterDeveloper] = useState("ALL");
  const [activePage, setActivePage] = useState("dashboard");

  const [form, setForm] = useState({
    title: "",
    description: "",
    assignedTo: "",
    priority: "MEDIUM",
    dueDate: "",
  });

  /* ================= LOAD DATA ================= */

  const loadData = async () => {
    try {
      const [ticketResponse, userResponse] =
        await Promise.all([
          getTickets(),
          getUsers(),
        ]);

      setTickets(ticketResponse.data);
      setUsers(userResponse.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  /* ================= DEVELOPERS ================= */

  const developers = users.filter(
    (user) => user.role === "DEVELOPER"
  );

  /* ================= FILTER TICKETS ================= */

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        ticket.title
          ?.toLowerCase()
          .includes(searchValue) ||
        ticket.description
          ?.toLowerCase()
          .includes(searchValue);

      const matchesStatus =
        filterStatus === "ALL" ||
        ticket.status === filterStatus;

      const assignedDeveloperId =
        ticket.assignedTo?._id ||
        ticket.assignedTo;

      const matchesDeveloper =
        filterDeveloper === "ALL" ||
        assignedDeveloperId === filterDeveloper;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesDeveloper
      );
    });
  }, [
    tickets,
    search,
    filterStatus,
    filterDeveloper,
  ]);

  /* ================= STATS ================= */

  const stats = {
    total: tickets.length,

    open: tickets.filter(
      (ticket) => ticket.status === "OPEN"
    ).length,

    progress: tickets.filter(
      (ticket) => ticket.status === "IN_PROGRESS"
    ).length,

    completed: tickets.filter(
      (ticket) => ticket.status === "COMPLETED"
    ).length,

    blocked: tickets.filter(
      (ticket) => ticket.status === "BLOCKED"
    ).length,
  };

  /* ================= CREATE TICKET ================= */

  const handleCreate = async (event) => {
    event.preventDefault();

    try {
      const teamLeader = users.find(
        (user) =>
          user.role === "TEAM_LEADER" ||
          user.role === "TEAM LEAD"
      );

      if (!teamLeader) {
        alert("Team Leader not found.");
        return;
      }

      await createTicket({
        ...form,
        createdBy: teamLeader._id,
      });

      setForm({
        title: "",
        description: "",
        assignedTo: "",
        priority: "MEDIUM",
        dueDate: "",
      });

      setShowCreate(false);

      await loadData();
    } catch (error) {
      console.error("Error creating ticket:", error);
      alert("Failed to create ticket.");
    }
  };

  /* ================= CHANGE STATUS ================= */

  const changeStatus = async (
    ticket,
    status
  ) => {
    try {
      await updateTicket(ticket._id, {
        status,
      });

      await loadData();

      const response = await getTickets();

      const updatedTicket =
        response.data.find(
          (item) => item._id === ticket._id
        );

      if (updatedTicket) {
        setSelectedTicket(updatedTicket);
      }
    } catch (error) {
      console.error(
        "Error updating status:",
        error
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex">

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="w-[250px] min-h-screen shrink-0 bg-white border-r border-gray-200 p-5 flex flex-col">

        {/* LOGO */}

        <div className="flex items-center gap-3 px-2 pb-8">

          <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-extrabold">
            T
          </div>

          <div>
            <h2 className="text-[17px] font-bold text-gray-900">
              TaskFlow
            </h2>

            <span className="text-xs text-gray-500">
              Team Management
            </span>
          </div>

        </div>

        {/* NAVIGATION */}

        <nav className="flex flex-col gap-1">

          <button
            className={`text-left px-3 py-3 rounded-lg transition ${
              activePage === "dashboard"
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
            onClick={() =>
              setActivePage("dashboard")
            }
          >
            Dashboard
          </button>

          <button
            className={`text-left px-3 py-3 rounded-lg transition ${
              activePage === "tickets"
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
            onClick={() =>
              setActivePage("tickets")
            }
          >
            Tickets
          </button>

          <button
            className={`text-left px-3 py-3 rounded-lg transition ${
              activePage === "developers"
                ? "bg-gray-100 text-gray-900 font-medium"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
            onClick={() =>
              setActivePage("developers")
            }
          >
            Developers
          </button>

        </nav>

        {/* CREATE BUTTON */}

        <button
          onClick={() => setShowCreate(true)}
          className="mt-6 w-full py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
        >
          + Create Ticket
        </button>

        {/* USER */}

        <div className="mt-auto border-t border-gray-200 pt-5 flex items-center gap-3">

          <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-700">
            TL
          </div>

          <div>
            <strong className="block text-sm text-gray-900">
              Team Leader
            </strong>

            <span className="block text-[11px] text-gray-500 mt-1">
              Administrator
            </span>
          </div>

        </div>

      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="flex-1 min-w-0 bg-white p-8 lg:p-10">

        {/* HEADER */}

        <header className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {activePage === "dashboard"
                ? "Dashboard"
                : activePage === "tickets"
                ? "Tickets"
                : "Developers"}
            </h1>

            <p className="text-gray-500 mt-2 text-sm">
              Manage your team's work and tasks.
            </p>

          </div>

          <button
            onClick={() => setShowCreate(true)}
            className="bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            + New Ticket
          </button>

        </header>

        {/* =====================================================
            DASHBOARD
        ====================================================== */}

        {activePage === "dashboard" && (
          <>

            {/* STATS */}

            <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">

              <Stat
                title="Total Tickets"
                value={stats.total}
              />

              <Stat
                title="Open"
                value={stats.open}
              />

              <Stat
                title="In Progress"
                value={stats.progress}
              />

              <Stat
                title="Completed"
                value={stats.completed}
              />

              <Stat
                title="Blocked"
                value={stats.blocked}
              />

            </section>

            {/* KANBAN */}

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

              {STATUS.map((status) => {

                const columnTickets =
                  filteredTickets.filter(
                    (ticket) =>
                      ticket.status === status
                  );

                return (
                  <div
                    key={status}
                    className="min-h-[500px] bg-gray-50 border border-gray-200 rounded-xl p-3"
                  >

                    {/* COLUMN HEADER */}

                    <div className="flex items-center justify-between mb-3 px-1">

                      <h3 className="text-sm font-semibold text-gray-800">
                        {formatStatus(status)}
                      </h3>

                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-[11px]">
                        {columnTickets.length}
                      </span>

                    </div>

                    {/* TICKETS */}

                    {columnTickets.map(
                      (ticket) => (
                        <TicketCard
                          key={ticket._id}
                          ticket={ticket}
                          onClick={() =>
                            setSelectedTicket(
                              ticket
                            )
                          }
                        />
                      )
                    )}

                  </div>
                );
              })}

            </section>

          </>
        )}

        {/* =====================================================
            TICKETS PAGE
        ====================================================== */}

        {activePage === "tickets" && (
          <section>

            {/* FILTERS */}

            <div className="flex flex-col md:flex-row gap-3 mb-5">

              <input
                placeholder="Search tickets..."
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value
                  )
                }
                className="flex-1 bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300"
              />

              <select
                value={filterStatus}
                onChange={(event) =>
                  setFilterStatus(
                    event.target.value
                  )
                }
                className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 outline-none focus:border-gray-500"
              >

                <option value="ALL">
                  All Statuses
                </option>

                {STATUS.map((status) => (
                  <option
                    key={status}
                    value={status}
                  >
                    {formatStatus(status)}
                  </option>
                ))}

              </select>

              <select
                value={filterDeveloper}
                onChange={(event) =>
                  setFilterDeveloper(
                    event.target.value
                  )
                }
                className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-3 outline-none focus:border-gray-500"
              >

                <option value="ALL">
                  All Developers
                </option>

                {developers.map(
                  (developer) => (
                    <option
                      key={developer._id}
                      value={developer._id}
                    >
                      {developer.name}
                    </option>
                  )
                )}

              </select>

            </div>

            {/* TICKET LIST */}

            <div className="flex flex-col gap-2">

              {filteredTickets.length === 0 ? (

                <div className="bg-white border border-gray-200 rounded-xl p-10 text-center text-gray-500">
                  No tickets found.
                </div>

              ) : (

                filteredTickets.map(
                  (ticket) => (
                    <TicketRow
                      key={ticket._id}
                      ticket={ticket}
                      onClick={() =>
                        setSelectedTicket(
                          ticket
                        )
                      }
                    />
                  )
                )

              )}

            </div>

          </section>
        )}

        {/* =====================================================
            DEVELOPERS PAGE
        ====================================================== */}

        {activePage === "developers" && (
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

            {developers.map(
              (developer) => {

                const developerTickets =
                  tickets.filter(
                    (ticket) => {

                      const assignedId =
                        ticket.assignedTo?._id ||
                        ticket.assignedTo;

                      return (
                        assignedId ===
                        developer._id
                      );
                    }
                  );

                return (
                  <div
                    key={developer._id}
                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
                  >

                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-700">
                      {developer.name
                        ?.slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mt-4">
                      {developer.name}
                    </h3>

                    <p className="text-gray-500 text-xs mt-1">
                      {developer.email}
                    </p>

                    <div className="flex gap-10 mt-6">

                      <div>
                        <strong className="block text-xl text-gray-900">
                          {
                            developerTickets.length
                          }
                        </strong>

                        <span className="text-[10px] text-gray-500">
                          Tickets
                        </span>
                      </div>

                      <div>

                        <strong className="block text-xl text-gray-900">
                          {
                            developerTickets.filter(
                              (ticket) =>
                                ticket.status ===
                                "COMPLETED"
                            ).length
                          }
                        </strong>

                        <span className="text-[10px] text-gray-500">
                          Completed
                        </span>

                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </section>
        )}

      </main>

      {/* =====================================================
          CREATE TICKET MODAL
      ====================================================== */}

      {showCreate && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() =>
            setShowCreate(false)
          }
        >

          <div
            className="w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl text-gray-900"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* MODAL HEADER */}

            <div className="flex items-start justify-between mb-6">

              <div>

                <h2 className="text-xl font-bold text-gray-900">
                  Create Ticket
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Assign a new task to a developer.
                </p>

              </div>

              <button
                onClick={() =>
                  setShowCreate(false)
                }
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition text-xl"
              >
                ×
              </button>

            </div>

            <form onSubmit={handleCreate}>

              {/* TITLE */}

              <label className="block text-xs text-gray-600 mb-2">
                Title
              </label>

              <input
                required
                value={form.title}
                onChange={(event) =>
                  setForm({
                    ...form,
                    title: event.target.value,
                  })
                }
                placeholder="Fix login authentication"
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300"
              />

              {/* DESCRIPTION */}

              <label className="block text-xs text-gray-600 mt-5 mb-2">
                Description
              </label>

              <textarea
                required
                value={form.description}
                onChange={(event) =>
                  setForm({
                    ...form,
                    description:
                      event.target.value,
                  })
                }
                placeholder="Describe the task..."
                className="w-full min-h-[120px] resize-y bg-white border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-300"
              />

              {/* ASSIGN + PRIORITY */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

                {/* ASSIGN */}

                <div>

                  <label className="block text-xs text-gray-600 mb-2">
                    Assign To
                  </label>

                  <select
                    required
                    value={form.assignedTo}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        assignedTo:
                          event.target.value,
                      })
                    }
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
                  >

                    <option value="">
                      Select developer
                    </option>

                    {developers.map(
                      (developer) => (
                        <option
                          key={developer._id}
                          value={developer._id}
                        >
                          {developer.name}
                        </option>
                      )
                    )}

                  </select>

                </div>

                {/* PRIORITY */}

                <div>

                  <label className="block text-xs text-gray-600 mb-2">
                    Priority
                  </label>

                  <select
                    value={form.priority}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        priority:
                          event.target.value,
                      })
                    }
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
                  >

                    {PRIORITIES.map(
                      (priority) => (
                        <option
                          key={priority}
                          value={priority}
                        >
                          {priority}
                        </option>
                      )
                    )}

                  </select>

                </div>

              </div>

              {/* DUE DATE */}

              <label className="block text-xs text-gray-600 mt-5 mb-2">
                Due Date
              </label>

              <input
                type="date"
                value={form.dueDate}
                onChange={(event) =>
                  setForm({
                    ...form,
                    dueDate:
                      event.target.value,
                  })
                }
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-3 text-sm text-gray-900 outline-none focus:border-gray-500"
              />

              {/* SUBMIT */}

              <button
                type="submit"
                className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition"
              >
                Create Ticket
              </button>

            </form>

          </div>

        </div>
      )}

      {/* =====================================================
          TICKET DETAILS
      ====================================================== */}

      {selectedTicket && (
        <TicketDetails
          ticket={selectedTicket}
          developers={developers}
          onClose={() =>
            setSelectedTicket(null)
          }
          onStatusChange={changeStatus}
        />
      )}

    </div>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function Stat({ title, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      <span className="block text-xs text-gray-500">
        {title}
      </span>

      <strong className="block text-3xl font-bold text-gray-900 mt-2">
        {value}
      </strong>

    </div>
  );
}

/* =========================================================
   TICKET CARD
========================================================= */

function TicketCard({
  ticket,
  onClick,
}) {
  const priorityStyles = {
    LOW: "bg-green-50 text-green-700 border border-green-100",

    MEDIUM:
      "bg-yellow-50 text-yellow-700 border border-yellow-100",

    HIGH: "bg-orange-50 text-orange-700 border border-orange-100",

    URGENT:
      "bg-red-50 text-red-700 border border-red-100",
  };

  const assignedName =
    ticket.assignedTo?.name ||
    "Unassigned";

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-lg p-3 mb-2 cursor-pointer hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md transition"
    >

      <div className="flex items-center justify-between mb-3">

        <span
          className={`px-2 py-1 rounded text-[9px] font-bold ${
            priorityStyles[
              ticket.priority
            ]
          }`}
        >
          {ticket.priority}
        </span>

        <span className="text-[10px] text-gray-400">
          #{ticket._id?.slice(-5)}
        </span>

      </div>

      <h4 className="text-sm font-semibold text-gray-900 mb-2">
        {ticket.title}
      </h4>

      <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
        {ticket.description}
      </p>

      <div className="flex items-center gap-2 mt-3">

        <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-700">
          {assignedName
            .slice(0, 2)
            .toUpperCase()}
        </div>

        <span className="text-[10px] text-gray-500">
          {assignedName}
        </span>

      </div>

    </div>
  );
}

/* =========================================================
   TICKET ROW
========================================================= */

function TicketRow({
  ticket,
  onClick,
}) {
  const priorityStyles = {
    LOW: "bg-green-50 text-green-700 border border-green-100",

    MEDIUM:
      "bg-yellow-50 text-yellow-700 border border-yellow-100",

    HIGH: "bg-orange-50 text-orange-700 border border-orange-100",

    URGENT:
      "bg-red-50 text-red-700 border border-red-100",
  };

  const statusStyles = {
    OPEN:
      "bg-blue-50 text-blue-700 border border-blue-100",

    IN_PROGRESS:
      "bg-purple-50 text-purple-700 border border-purple-100",

    IN_REVIEW:
      "bg-indigo-50 text-indigo-700 border border-indigo-100",

    COMPLETED:
      "bg-green-50 text-green-700 border border-green-100",

    BLOCKED:
      "bg-red-50 text-red-700 border border-red-100",
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-4 grid grid-cols-1 md:grid-cols-[1fr_150px_100px] items-center gap-4 cursor-pointer hover:bg-gray-50 hover:shadow-sm transition"
    >

      <div>

        <strong className="text-sm text-gray-900">
          {ticket.title}
        </strong>

        <p className="text-[11px] text-gray-500 mt-1">
          #{ticket._id?.slice(-5)} ·{" "}
          {ticket.assignedTo?.name ||
            "Unassigned"}
        </p>

      </div>

      <span
        className={`inline-flex w-fit px-2 py-1 rounded text-[9px] font-bold ${
          statusStyles[ticket.status]
        }`}
      >
        {formatStatus(ticket.status)}
      </span>

      <span
        className={`inline-flex w-fit px-2 py-1 rounded text-[9px] font-bold ${
          priorityStyles[ticket.priority]
        }`}
      >
        {ticket.priority}
      </span>

    </div>
  );
}

/* =========================================================
   TICKET DETAILS
========================================================= */

function TicketDetails({
  ticket,
  onClose,
  onStatusChange,
}) {
  const statusStyles = {
    OPEN:
      "bg-blue-50 text-blue-700 border border-blue-100",

    IN_PROGRESS:
      "bg-purple-50 text-purple-700 border border-purple-100",

    IN_REVIEW:
      "bg-indigo-50 text-indigo-700 border border-indigo-100",

    COMPLETED:
      "bg-green-50 text-green-700 border border-green-100",

    BLOCKED:
      "bg-red-50 text-red-700 border border-red-100",
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >

      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-2xl text-gray-900"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* HEADER */}

        <div className="flex items-start justify-between mb-6">

          <div>

            <span className="text-[10px] text-gray-400">
              #{ticket._id?.slice(-5)}
            </span>

            <h2 className="text-xl font-bold text-gray-900 mt-1">
              {ticket.title}
            </h2>

          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition text-xl"
          >
            ×
          </button>

        </div>

        {/* DESCRIPTION */}

        <p className="text-sm text-gray-600 leading-7">
          {ticket.description}
        </p>

        {/* DETAILS */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">

            <span className="block text-[10px] text-gray-500 mb-2">
              Assigned To
            </span>

            <strong className="text-xs text-gray-900">
              {ticket.assignedTo?.name ||
                "Unassigned"}
            </strong>

          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">

            <span className="block text-[10px] text-gray-500 mb-2">
              Priority
            </span>

            <strong className="text-xs text-gray-900">
              {ticket.priority}
            </strong>

          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">

            <span className="block text-[10px] text-gray-500 mb-2">
              Due Date
            </span>

            <strong className="text-xs text-gray-900">
              {ticket.dueDate
                ? new Date(
                    ticket.dueDate
                  ).toLocaleDateString()
                : "No due date"}
            </strong>

          </div>

        </div>

        {/* CURRENT STATUS */}

        <div className="mt-6">

          <span className="block text-xs text-gray-500 mb-3">
            Current Status
          </span>

          <span
            className={`inline-flex px-3 py-2 rounded-lg text-xs font-semibold ${
              statusStyles[
                ticket.status
              ]
            }`}
          >
            {formatStatus(ticket.status)}
          </span>

        </div>

        {/* CHANGE STATUS */}

        <div className="mt-6">

          <span className="block text-xs text-gray-500 mb-3">
            Change Status
          </span>

          <div className="flex flex-wrap gap-2">

            {STATUS.map((status) => (

              <button
                key={status}
                onClick={() =>
                  onStatusChange(
                    ticket,
                    status
                  )
                }
                className={`px-3 py-2 rounded-lg text-[11px] border transition ${
                  ticket.status === status
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {formatStatus(status)}
              </button>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   FORMAT STATUS
========================================================= */

function formatStatus(status) {
  return status
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (character) =>
      character.toUpperCase()
    );
}

export default Ticket;