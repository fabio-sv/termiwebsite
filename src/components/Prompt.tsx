import { Cursor } from "./Cursor"
import { input } from "./Terminal"

type PromptProps = {
    command?: string;
}

export const Prompt = ({ command }: PromptProps) => {
    return (
        <div class='text-blue-600 font-bold'>
            {/* top */}
            <div class='flex relative'>
                <div class='bg-transparent border-l-2 border-t-2 h-3 w-6 border-blue-600 mt-2' />
                <span class='ml-[-2px]'>(</span>

                <p class='text-red-600'>you💀ubuntu-22.04</p>

                <span>)-[</span>
                <p class='text-white'>~</p>
                <span>]</span>
            </div>

            {/* bottom */}
            <div class='flex relative'>
                <div class='bg-transparent border-l-2 border-b-2 h-3 w-3 border-blue-600' />
                <p class='text-red-600 mr-1'>#</p>

                {/* inner html is a hack to get whitespace to look correct */}
                <span class='text-fsv-gray font-thin'>{command || input()}</span>
                {command ? null : <Cursor />}
            </div>
        </div>
    )
}
