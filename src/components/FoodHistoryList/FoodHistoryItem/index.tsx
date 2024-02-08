import { FC } from 'react';
import { IFoodHistory } from '../../../models/FoodHistory';

const FoodHistoryItem: FC<IFoodHistory> = ({food}) => {
  return (
    <div>
      {food.name}
    </div>
  );
};

export default FoodHistoryItem;