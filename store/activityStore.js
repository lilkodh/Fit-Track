
import { steps } from "react-native-reanimated";
import {create } from "zustand";
const useActivityStore = create((set) => ({
    steps: 10000,
    setSteps: (newSteps) => {
        set({steps: newSteps});
    },
}) );
export default useActivityStore;