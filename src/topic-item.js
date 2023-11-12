import { Checkbox } from '@mui/material';

export default function TopicItem({id, name, checkedList}) {
    return (
        <div className="topicTile">
            <Checkbox checked={checkedList.includes(id)} />
            <span>{name}</span>
        </div>
    )
}