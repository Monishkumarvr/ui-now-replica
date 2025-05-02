
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, X } from "lucide-react";

// Sample data based on the image
const reportData = [
  {
    id: "SW2023121800I",
    startTime: { date: "18-12-2023", time: "11:12:24" },
    totalEnergy: 0,
    vibroCharging: "1 Min 55 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "20 Secs",
    melting: "7 Mins 55 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "11:20:38" },
    duration: "8 Mins 14 Secs"
  },
  {
    id: "SW2023121800Z",
    startTime: { date: "18-12-2023", time: "12:48:46" },
    totalEnergy: 0,
    vibroCharging: "3 Mins 29 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "15 Secs",
    melting: "8 Mins 29 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "12:57:31" },
    duration: "8 Mins 45 Secs"
  },
  {
    id: "SW2023121800B",
    startTime: { date: "18-12-2023", time: "13:02:04" },
    totalEnergy: 0,
    vibroCharging: "53 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "21 Secs",
    melting: "4 Mins 19 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "13:06:44" },
    duration: "4 Mins 40 Secs"
  },
  {
    id: "SW2023121800L",
    startTime: { date: "18-12-2023", time: "13:08:18" },
    totalEnergy: 0,
    vibroCharging: "1 Min 31 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "16 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "19 Secs",
    melting: "7 Mins 8 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "13:15:44" },
    duration: "7 Mins 26 Secs"
  },
  {
    id: "SW2023121800S",
    startTime: { date: "18-12-2023", time: "13:16:37" },
    totalEnergy: 0,
    vibroCharging: "2 Mins 38 Secs",
    spectrometerCheck: true,
    atasCheck: true,
    chemicalCorrection: "15 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "1 Min 7 Secs",
    melting: "11 Mins 47 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "13:29:32" },
    duration: "12 Mins 55 Secs"
  },
  {
    id: "SW2023121800X",
    startTime: { date: "18-12-2023", time: "14:05:21" },
    totalEnergy: 0,
    vibroCharging: "2 Mins 10 Secs",
    spectrometerCheck: true,
    atasCheck: false,
    chemicalCorrection: "20 Secs",
    pyrometerCheck: true,
    deslaging: true,
    tapping: "18 Secs",
    melting: "8 Mins 12 Secs",
    temperature: 0,
    weight: 0,
    endTime: { date: "18-12-2023", time: "14:14:01" },
    duration: "8 Mins 40 Secs"
  }
];

const ReportTable = () => {
  return (
    <div className="rounded-md border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900 text-white whitespace-nowrap">
              <TableHead className="text-white border-r border-blue-800 py-3 text-lg">Cycle No ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Start Time ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Total Energy KWh ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Vibro Charging ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Spectrometer Check ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">ATAS Check ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Chemical Correction ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Pyrometer Check ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Deslaging ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Tapping ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Melting ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Temperature °C ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">Weight Kg ↓</TableHead>
              <TableHead className="text-white border-r border-blue-800 text-lg">End Time ↓</TableHead>
              <TableHead className="text-white text-lg">Duration ↓</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reportData.map((row, index) => (
              <TableRow key={row.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium border-r text-lg">{row.id}</TableCell>
                <TableCell className="border-r whitespace-nowrap text-lg">
                  <div>{row.startTime.date}</div>
                  <div>{row.startTime.time}</div>
                </TableCell>
                <TableCell className="border-r text-center text-lg">{row.totalEnergy}</TableCell>
                <TableCell className="border-r text-center text-lg">{row.vibroCharging}</TableCell>
                <TableCell className="border-r text-center">
                  {row.spectrometerCheck && <CheckCircle className="h-6 w-6 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center">
                  {row.atasCheck ? (
                    <CheckCircle className="h-6 w-6 mx-auto text-green-500" />
                  ) : (
                    <X className="h-6 w-6 mx-auto text-red-500" />
                  )}
                </TableCell>
                <TableCell className="border-r text-center text-lg">{row.chemicalCorrection}</TableCell>
                <TableCell className="border-r text-center">
                  {row.pyrometerCheck && <CheckCircle className="h-6 w-6 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center">
                  {row.deslaging && <CheckCircle className="h-6 w-6 mx-auto text-green-500" />}
                </TableCell>
                <TableCell className="border-r text-center text-lg">{row.tapping}</TableCell>
                <TableCell className="border-r text-center text-lg">{row.melting}</TableCell>
                <TableCell className="border-r text-center text-lg">{row.temperature}</TableCell>
                <TableCell className="border-r text-center text-lg">{row.weight}</TableCell>
                <TableCell className="border-r whitespace-nowrap text-lg">
                  <div>{row.endTime.date}</div>
                  <div>{row.endTime.time}</div>
                </TableCell>
                <TableCell className="text-center text-lg">{row.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReportTable;
