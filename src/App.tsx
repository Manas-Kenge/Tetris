import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CELL_COLORS } from './utils/colors';

function App() {
    const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

    return (
        <div className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col">
            <h1 className="text-4xl font-bold text-center py-4">Tetris</h1>
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-8 p-4">
                <div className="w-full max-w-md">
                    <Board currentBoard={board} cellColors={CELL_COLORS} />
                </div>
                <div className="w-full max-w-xs">
                    <Card>
                        <CardHeader>
                            <CardTitle>Game Controls</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {!isPlaying && (
                                <Button onClick={startGame} className="w-full">
                                    New Game
                                </Button>
                            )}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Score</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-2xl font-bold">{score}</p>
                                </CardContent>
                            </Card>
                            {isPlaying && (
                                <UpcomingBlocks upcomingBlocks={upcomingBlocks} cellColors={CELL_COLORS} />
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;