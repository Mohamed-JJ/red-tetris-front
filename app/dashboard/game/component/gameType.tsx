import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Select,
    Spinner,
    SelectItem,
  } from "@heroui/react";
  import { FC, useState } from "react";
  
  interface GameTypeProps {
    isMulti: boolean;
  }
  
  export const GameType: FC<GameTypeProps> = ({ isMulti }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [roomName, setRoomName] = useState("");
    const [difficulty, setDifficulty] = useState("easy");
    const [waiting, setWaiting] = useState(false);
  
    
    const handleStart = () => {
      if (isMulti) {
        setWaiting(true);
    
        setTimeout(() => {
          setWaiting(false);
          onOpenChange(); 
        }, 15000);
      } else {
        onOpenChange();
      }
    };
  
    const handleCancel = () => {
      setWaiting(false);
      onOpenChange();
    };
  
    return (
      <>
        <Button onPress={onOpen} className="rounded-xl w-full max-h-2/5 min-h-96 bg-[#19172c] border border-white/10">
          <span className="text-[#a8b0d3]">{isMulti ? "Multiplayer Game" : "Solo Game"}</span>
          <Modal
            backdrop="opaque"
            classNames={{
              body: "py-6",
              backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
              base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
              header: "border-b-[1px] border-[#292f46]",
              footer: "border-t-[1px] border-[#292f46]",
              closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
            className="border border-white/10 rounded-xl"
            isOpen={isOpen}
            radius="lg"
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {isMulti ? "Create or Join Multiplayer Room" : "Start Solo Game"}
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col gap-4">
                      <Input
                        label="Room Name"
                        placeholder="Enter room name"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        disabled={waiting}
                        required
                      />
                      <Select
                        label="Difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        disabled={waiting}
                        required
                      >
                        <SelectItem key={'easy'} value="easy">Easy</SelectItem>
                        <SelectItem key={'normal'} value="normal">Normal</SelectItem>
                        <SelectItem key={'hard'} value="hard">Hard</SelectItem>
                      </Select>
                      {isMulti && waiting && (
                        <div className="flex flex-col items-center gap-2">
                          <Spinner />
                          <span>Waiting for other players to join...</span>
                        </div>
                      )}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="light" onPress={handleCancel} disabled={waiting}>
                      Cancel
                    </Button>
                    <Button
                      className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                      onPress={handleStart}
                      isDisabled={!roomName || waiting}
                    >
                      {isMulti ? (waiting ? "Starting..." : "Start Room") : "Start Game"}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </Button>
      </>
    );
  };
  