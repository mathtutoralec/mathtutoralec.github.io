import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleError } from "../../utils/notifications";

export const loadEnvSettings = createAsyncThunk("env/loadEnvSettings", async () => {
  try {
    const response = await fetch("/env.json");
    const config = await response.json();

    // Use local service if variable is configured
    if (!!process.env.REACT_APP_USE_LOCAL_SERVICE) {
      config.rest.endpoint = "http://localhost:8091";
    }

    return config;
  } catch {
    handleError("Failed to load. Please try again later.");
    return null;
  }
});
