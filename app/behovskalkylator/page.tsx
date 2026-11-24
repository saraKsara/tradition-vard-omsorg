import type { Metadata } from "next";
import { NeedsCalculator } from "./NeedsCalculator";

export const metadata: Metadata = {
  title: "Behovskalkylator | Tradition vård & omsorg",
  description:
    "Beräkna en vägledande månadskostnad för privat hemtjänst och service, med hänsyn till ditt RUT-utrymme.",
};

export default function CalculatorPage() {
  return <NeedsCalculator />;
}
