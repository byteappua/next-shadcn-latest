import { TVChartContainer } from "@/components/tv/tv";
import { ResolutionString } from "@/public/charting_library/charting_library";

export default function Home() {
  return (
    <div className="h-full">
      <TVChartContainer
        symbol="6000"
        library_path="https://tv.floors.us.kg/tv/"
        locale="zh"
        autosize={true}
        interval={"1d" as ResolutionString}
      />
    </div>
  );
}
