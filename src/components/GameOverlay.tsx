
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const GameOverOverlay = ({ score, onRestart }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                className="bg-gradient-to-br from-teal-400 to-indigo-600 p-8 rounded-xl shadow-2xl text-center max-w-md w-full mx-4"
            >
                <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-md">
                    Game Over
                </h2>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-6">
                    <p className="text-xl font-semibold text-white mb-2">Your Score</p>
                    <p className="text-5xl font-bold text-teal-300 drop-shadow-md">
                        {score}
                    </p>
                </div>
                <Button
                    onClick={onRestart}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Play Again
                </Button>
            </motion.div>
        </motion.div>
    );
};