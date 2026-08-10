import axios from "axios";

const API = axios.create({
  baseURL: "https://ticket-system-backend-jofz.onrender.com/api"
});

export const getTickets = (params = {}) =>
  API.get("/tickets", { params });

export const getTicket = (id) =>
  API.get(`/tickets/${id}`);

export const createTicket = (data) =>
  API.post("/tickets", data);

export const updateTicket = (id, data) =>
  API.put(`/tickets/${id}`, data);

export const deleteTicket = (id) =>
  API.delete(`/tickets/${id}`);

export const addComment = (id, data) =>
  API.post(`/tickets/${id}/comments`, data);

export const getUsers = () =>
  API.get("/users");

export const createUser = (data) =>
  API.post("/users", data);