"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const HeroPage = () => {
    const odds = useQuery(api.odds.get);    
    return (
        <div className="text-3xl m-5">
            <ul>
                {odds?.map((odds) => (
                    <li>
                    {odds.sport_title} - {odds.home_team.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroPage;