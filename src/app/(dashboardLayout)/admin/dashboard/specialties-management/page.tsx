import SpecialtiesManagementHeader from "@/components/module/admin/SpecialtiesMangement/SpecialitiesManagementHeaders";
import SpecialtiesTable from "@/components/module/admin/SpecialtiesMangement/SpecialtiesTable";
import RefreshButton from "@/components/shared/RefreshButton";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { getSpecialties } from "@/services/admin/specialties";
import { Suspense } from "react";

export default async function page() {
  const result = await getSpecialties()
  return (
    <div className="space-y-6">
      <SpecialtiesManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <SpecialtiesTable specialties={result.data} />
      </Suspense>
    </div>
  );
};
