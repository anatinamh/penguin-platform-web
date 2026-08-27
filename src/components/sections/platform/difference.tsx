import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Container } from "@/components/layout/container";
import { difference } from "@/content/pages/platform";

export function Difference() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">{difference.eyebrow}</span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl">
            {difference.title}
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border/60">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{difference.columns[0]}</TableHead>
                <TableHead>{difference.columns[1]}</TableHead>
                <TableHead>{difference.columns[2]}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {difference.rows.map((row) => (
                <TableRow key={row.dimension}>
                  <TableCell className="font-medium whitespace-nowrap">{row.dimension}</TableCell>
                  <TableCell className="text-muted-foreground">
                    <span className="flex items-start gap-2">
                      <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                      {row.boltOn}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {row.pengui}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </section>
  );
}
