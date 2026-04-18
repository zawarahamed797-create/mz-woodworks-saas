import fs from "fs";
import path from "path";

const file = path.join(process.cwd(), "data/leads.json");

export async function GET() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  return Response.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(file, "utf8"));

  data.push({
    ...body,
    status: "new"
  });

  fs.writeFileSync(file, JSON.stringify(data, null, 2));

  return Response.json({ success: true });
}
