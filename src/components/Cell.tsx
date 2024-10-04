import { CellColor } from '../utils/colors';

interface Props {
    type: CellColor;
    colorClass: string;
}

function Cell({ colorClass }: Props) {
    return (
        <div
            className={`w-8 h-8 border ${colorClass}`}
        />
    );
}

export default Cell;