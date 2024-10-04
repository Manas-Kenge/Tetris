import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CELL_COLORS } from './utils/colors';
import { GameOverOverlay } from './components/GameOverlay';

function App() {
    const { board, startGame, pauseGame, resumeGame, isPlaying, isPaused, score, upcomingBlocks, isGameOver } = useTetris();

    return (
        <div className="h-screen w-screen overflow-hidden bg-gray-100 flex flex-col">
            <h1 className="text-4xl font-bold text-center py-4">Tetris</h1>
            <div className="flex-grow flex flex-col md:flex-row items-center justify-center gap-8 p-4">
                <div className="w-full max-w-md">
                    <Board currentBoard={board} cellColors={CELL_COLORS} />
                    {/* {isGameOver && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg text-center">
                                <h2 className="text-2xl font-bold mb-4">Game Over</h2>
                                <p className="mb-4">Your score: {score}</p>
                                <Button onClick={startGame}>Play Again</Button>
                            </div>
                        </div>
                    )} */}
                    {isGameOver && (
                        <GameOverOverlay score={score} onRestart={startGame} />
                    )}
                </div>
                <div className="w-full max-w-xs">
                    <Card>
                        <CardHeader>
                            <CardTitle>Game Controls</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {!isPlaying ? (
                                <Button onClick={startGame} className="w-full">
                                    New Game
                                </Button>
                            ) : (
                                <Button onClick={isPaused ? resumeGame : pauseGame} className="w-full">
                                    {isPaused ? "Resume" : "Pause"}
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