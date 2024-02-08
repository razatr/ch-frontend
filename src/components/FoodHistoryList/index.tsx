import { FC } from 'react';
import FoodHistoryItem from './FoodHistoryItem';
import { useAppSelector } from '../../hooks';
import { foodHistorySelector } from '../../store/selectors/food-history';

interface FoodHistoryProps {

}

const FoodHistory: FC<FoodHistoryProps> = () => {
  const history = useAppSelector(foodHistorySelector);

  return (
    <>
      {history.map((foodHistoryElement) => <FoodHistoryItem key={foodHistoryElement.foodHistoryId} {...foodHistoryElement}/>)}
    </>
  )
};

export default FoodHistory;