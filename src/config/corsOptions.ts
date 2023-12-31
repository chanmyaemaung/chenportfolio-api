import { allowedOrigins } from "./allowOrigins";

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

export default corsOptions;
