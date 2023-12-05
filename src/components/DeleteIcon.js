import React from "react";
import { Popover } from "@radix-ui/react-popover";
import { Cross1Icon, Cross2Icon } from "@radix-ui/react-icons";

function DeleteIcon() {

  return (
    <>
    <Popover.Root>
      <Popover.Trigger>
        <Cross1Icon />
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content>

          <div>
            <p>Do you want to delete this destination ?</p>
          </div>

          <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>

        </Popover.Content>
      </Popover.Portal>


    </Popover.Root>
    </>
  );
}

export default DeleteIcon 
