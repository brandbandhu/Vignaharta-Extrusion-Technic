import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vignaharta Extrusion Technic | Pipe Manufacturing Machinery" },
      {
        name: "description",
        content:
          "Vignaharta Extrusion Technic & Vignaharta Enterprise - Industrial Extruder Machines, Screw Barrels, Gear Boxes, Spare Parts and Chemical Machinery for Pipe Manufacturing.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/home.html");
  }, []);
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      Loading Vignaharta Extrusion Technic…
    </div>
  );
}
