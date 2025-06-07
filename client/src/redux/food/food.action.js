import axios from "axios";
import {
  foodRequest,
  foodSuccess,
  foodFail,
  getFoodByIdSuccess,
  addFoodSuccess,
  deleteFoodSuccess,
} from "./food.reducer";

// Helper to safely extract error message
const getErrorMessage = (error) => {
  return (
    error?.response?.data?.message || error?.message || "Something went wrong"
  );
};

export const getAllFood = (_id) => async (dispatch) => {
  try {
    if (!_id) {
      throw new Error("Provider ID is missing");
    }

    dispatch(foodRequest());
    const foodData = await axios.get(
      `http://localhost:5000/api/v1/food/provider/${_id}`
    );
    dispatch(foodSuccess(foodData.data));
  } catch (error) {
    dispatch(foodFail(getErrorMessage(error)));
  }
};

export const getFoodById = (_id) => async (dispatch) => {
  try {
    if (!_id) {
      throw new Error("Food ID is missing");
    }

    dispatch(foodRequest());
    const food = await axios.get(`http://localhost:5000/api/v1/food/${_id}`);
    dispatch(getFoodByIdSuccess(food.data));
  } catch (error) {
    dispatch(foodFail(getErrorMessage(error)));
  }
};

export const addFood = (data) => async (dispatch) => {
  try {
    dispatch(foodRequest());
    const food = await axios.post("http://localhost:5000/api/v1/food", data);
    dispatch(addFoodSuccess(food.data));
  } catch (error) {
    dispatch(foodFail(getErrorMessage(error)));
  }
};

export const deleteFood = (_id) => async (dispatch) => {
  try {
    if (!_id) {
      throw new Error("Food ID is missing for deletion");
    }

    dispatch(foodRequest());
    await axios.delete(`http://localhost:5000/api/v1/food/${_id}`);
    dispatch(deleteFoodSuccess(_id));
  } catch (error) {
    dispatch(foodFail(getErrorMessage(error)));
  }
};
