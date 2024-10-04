import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTetris } from '../hooks/useTetris';
import UpcomingBlocks from './UpcomingBlocks';

export const Hero = () => {
    const { score, startGame, isPlaying, upcomingBlocks } = useTetris();
    return (
        <div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Your Score</CardTitle>
                </CardHeader>
                <CardContent>
                    <h2> {score} </h2>
                     {/* @ts-ignore */}
                    {isPlaying && <UpcomingBlocks upcomingBlocks={upcomingBlocks} />}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    {!isPlaying && <Button onClick={startGame}>NEW GAME</Button>}
                </CardFooter>
            </Card>
        </div>
    )
}