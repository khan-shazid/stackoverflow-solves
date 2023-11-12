import {useState, useEffect, useCallback, useMemo} from 'react';

import { Checkbox, FormControl, MenuItem, Select } from '@mui/material';
import TopicList from './topic-list';
import TopicItem from './topic-item';


const TopicFeedDropdownSelector = () => {
    const [topicList, setTopicList] = useState([{id: 1, name: 'first'}, {id: 2, name: 'second'}, {id: 3, name: 'third'}, {id: 4, name: 'fourth'}]);
    const [checkedTopicList, setCheckedTopicList] = useState([]);
    const [page, setPage] = useState(1);
    const [searchKey, setSearchKey] = useState('');
    const getData = useCallback(async () => {
      // Used go get some data with an API call.
    }, [page, searchKey]);
    useEffect(() => {
      getData();
    }, []);

    const options = useMemo(() => {
        return topicList.map((topic) => <MenuItem key={topic.id} value={topic.id} role="option">
            <div className="topicTile">
            <Checkbox checked={checkedTopicList.includes(topic.id)} />
            <span>{topic.name}</span>
            </div>
        </MenuItem>)
    }, [topicList, checkedTopicList])
    return (
      <div>
        <Select
          multiple={true}
          IconComponent={() => (
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.52567 15.7821L11.287 11.0208C11.5775 10.7303 11.5775 10.2591 11.287 9.96863C10.9964 9.67807 10.5254 9.67807 10.2349 9.96863L6.74356 13.4599L6.74356 0.743959C6.74356 0.333115 6.41044 0 5.9996 0C5.58882 0 5.25564 0.333115 5.25564 0.743959L5.25564 13.4599L1.76433 9.96875C1.47377 9.67819 1.00275 9.67819 0.712193 9.96875C0.567032 10.114 0.494303 10.3044 0.494303 10.4948C0.494303 10.6852 0.567032 10.8756 0.712193 11.0209L5.47353 15.7821C5.76409 16.0727 6.23511 16.0727 6.52567 15.7821Z"
                fill="#666666"
              />
            </svg>
          )}
          value={checkedTopicList}
          onChange={(e) => {
            console.log(e.target.value);
            setCheckedTopicList(e.target.value)
          }}>
          {/* {
            topicList.map((topic) => <MenuItem key={topic.id} value={topic.id} role="option">
                <TopicItem name={topic.name} id={topic.id} checkedList={checkedTopicList} />
            </MenuItem>)
          } */}
          {options}
        </Select>
      </div>
    );
  };
  
  export default TopicFeedDropdownSelector;