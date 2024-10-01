import { Block, SHAPES } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CELL_COLORS, CellColor } from '../utils/colors';

interface Props {
  upcomingBlocks: Block[];
  cellColors: typeof CELL_COLORS;
}

function UpcomingBlocks({ upcomingBlocks, cellColors }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">Next Blocks</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-4">
        {upcomingBlocks.map((block, blockIndex) => {
          const shape = SHAPES[block].shape.filter((row) =>
            row.some((cell) => cell)
          );
          return (
            <div key={blockIndex} className="bg-gray-100 p-2 rounded">
              {shape.map((row, rowIndex) => {
                return (
                  <div key={rowIndex} className="flex">
                    {row.map((isSet, cellIndex) => {
                      const cellColor = isSet ? cellColors[block as CellColor] : 'bg-transparent';
                      return (
                        <div
                          key={`${blockIndex}-${rowIndex}-${cellIndex}`}
                          className={`w-4 h-4 border ${isSet ? cellColor : 'border-transparent'}`}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default UpcomingBlocks;