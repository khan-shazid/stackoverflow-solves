import React from 'react';
import { Checkbox, MenuItem } from '@mui/material';
// interface TopicListProps {
//   list: LMFeedTopics[];
//   checkedList: string[];
// }
const TopicList = ({ list, checkedList }) => {
  return list.map((topic) => {
    return (
      <MenuItem key={topic.id} value={topic.id} role="option">
        <div className="topicTile">
          <Checkbox checked={checkedList.includes(topic.id)} />
          <span>{topic.name}</span>
        </div>
      </MenuItem>
    );
  });
};

export default TopicList;