"use client";
import { Next13NProgress } from 'nextjs13-progress';

const TopNavigationLoader = () => {
    return (
        <Next13NProgress
            color="#008000"
            height={5}
            options={{ easing: 'ease', speed: 100 }}
        />
    )
}
export default TopNavigationLoader;