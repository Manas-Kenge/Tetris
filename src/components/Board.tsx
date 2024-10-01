import Cell from './Cell';
import { BoardShape } from '../types';
import { Card, CardContent } from "@/components/ui/card"
import { CELL_COLORS, CellColor } from '../utils/colors';

interface Props {
    currentBoard: BoardShape;
    cellColors: typeof CELL_COLORS;
}

function Board({ currentBoard, cellColors }: Props) {
    const boardWidth = currentBoard[0].length;
    
    return (
        <Card className="w-fit mx-auto">
            <CardContent className="p-4">
                <div 
                    className="grid gap-px bg-gray-300"
                    style={{
                        gridTemplateColumns: `repeat(${boardWidth}, minmax(0, 1fr))`,
                        width: `${boardWidth * 2}rem`, // Assuming each cell is 2rem wide
                    }}
                >
                    {currentBoard.flat().map((cell, index) => (
                        <Cell 
                            key={index}
                            type={cell as CellColor} 
                            colorClass={cellColors[cell as CellColor]} 
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default Board;