"use client";

import { Button, Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import React from "react";
import {GameType} from './component/gameType';

type Game = {
  id: string;
  mode: "Solo" | "Multiplayer";
  players: number;
  status: "In Progress" | "Waiting" | "Finished";
};

const games: Game[] = [
  { id: "1", mode: "Multiplayer", players: 2, status: "Waiting" },
  { id: "2", mode: "Multiplayer", players: 2, status: "Waiting" },
  { id: "3", mode: "Multiplayer", players: 4, status: "In Progress" },
];

export default function HomePage() {
  
  return (
    <section className="p-4">
       <div className="w-full flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Red-Tetris</h1>
        <p className="text-lg text-center max-w-2xl">
          Welcome to Red-Tetris! This is a fast-paced, competitive Tetris game that you can play solo or with friends. 
          <br />
          <span className="font-semibold">Instructions:</span> Select Solo or Multiplayer mode below to start. In Multiplayer, wait for other players to join and try to outlast everyone else!
        </p>
      </div>
      <div className="flex flex-row gap-8 p-4 w-xl justify-center mx-auto"> 
      <GameType isMulti={false}/>
      <GameType isMulti={true}/>

      </div>

    <div className="min-h-screen flex flex-col items-center  py-8 bottom-0">
      <Card className="w-full max-w-md mb-8 p-6 flex flex-col items-center gap-6 shadow-lg">
        
        

      </Card>

      <Card className="w-full max-w-2xl p-4 shadow-md border border-white/10 rounded-2xl">
        <h2 className="text-xl font-semibold mb-2">Ongoing Games</h2>
        <Table aria-label="Ongoing Games Table">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Mode</TableColumn>
            <TableColumn>Players</TableColumn>
            <TableColumn>Status</TableColumn>
          </TableHeader>
          <TableBody>
            {games.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-[#a8b0d3]">No games currently.</TableCell>
              </TableRow>
            ) : (
              games.map(game => (
                <TableRow key={game.id}>
                  <TableCell>{game.id}</TableCell>
                  <TableCell>{game.mode}</TableCell>
                  <TableCell>{game.players}</TableCell>
                  <TableCell>{game.status}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
    </section>
  );
}
