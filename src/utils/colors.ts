export const CELL_COLORS = {
    I: 'bg-cyan-400 border-cyan-500',
    J: 'bg-blue-500 border-blue-600',
    L: 'bg-orange-400 border-orange-500',
    O: 'bg-yellow-400 border-yellow-500',
    S: 'bg-green-400 border-green-500',
    T: 'bg-purple-500 border-purple-600',
    Z: 'bg-red-500 border-red-600',
    Empty: 'bg-gray-200 border-gray-300'
};

export type CellColor = keyof typeof CELL_COLORS;