export const domainName =
	process.env.NODE_ENV === "production"
		? "https://watchtube-backend.onrender.com"
		: "http://localhost:8800";
