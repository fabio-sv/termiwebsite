import { For, createEffect, createSignal } from 'solid-js'
import { VsTerminalBash } from 'solid-icons/vs'
import { IoCloseCircleSharp } from 'solid-icons/io'
import { TbCircleFilled } from 'solid-icons/tb'
import { Prompt } from './Prompt'
import { alphabet } from '../data/keys'
import { Command, commands } from '../data/commands'
import { ErrorComponent } from './Error'

export const [input, setInput] = createSignal("");

export const Terminal = () => {
    const [outputs, setOutputs] = createSignal<Command[]>([]);
    let scrollRef: HTMLDivElement | undefined;

    createEffect(() => {
        console.log(outputs())

        if (scrollRef) {
            scrollRef.scrollTop = scrollRef.scrollHeight
        }
    })

    createEffect(() => {
        window.addEventListener('keydown', (ev: KeyboardEvent) => {
            // ABC
            if (alphabet.includes(ev.key.toLowerCase())) {
                setInput(prev => `${prev}${ev.key}`);
            }

            // Backspace
            if (ev.key === 'Backspace') {
                setInput(prev => prev.slice(0, -1));
            }

            // Enter
            if (ev.key === 'Enter') {
                const commandToExecute: Command = commands.find(c => c.name === input() || c.aliases?.includes(input())) || {
                    name: input(),
                    component: ErrorComponent
                }

                setOutputs(prev => [...prev, commandToExecute]);
                setInput('');
            }
        })

    })

    return (
        <article class='font-fira-code shadow-terminal bg-fsv-black/[.70] rounded-md text-fsv-gray font-semibold border-b-2 border-solid border-black/[.4] select-none relative max-w-3xl flex-1'>
            <header class='bg-fsv-black p-2 rounded-tr-md rounded-tl-md text-sm flex justify-between'>
                <VsTerminalBash />

                <p>you@ubuntu-22.04: ~</p>

                <aside class='flex gap-2'>
                    <TbCircleFilled color='black' size='1.2rem' />
                    <TbCircleFilled color='black' size='1.2rem' />
                    <IoCloseCircleSharp color='#ab3738' size='1.2rem' />
                </aside>
            </header>
            <div class='py-2 px-1 text-sm font-thin overflow-y-auto sm:h-96' ref={scrollRef}>
                <p>
                    Welcome to my terminal site! <br />
                    <br />

                    * Github: <a class='hover:underline' href="https://github.com/fabio-sv" target='_blank' rel='noreferrer'>https://github.com/fabio-sv</a> <br />
                    * Repo: <a class='hover:underline' href="https://github.com/fabio-sv/termiwebsite" target="_blank" rel="noreferrer">https://github.com/fabio-sv/termiwebsite</a> <br />
                    <br />

                    * Type 'help' to see the list of available commands.
                </p>

                <For each={outputs()}>
                    {(output) => <>
                        <Prompt command={output.name} />
                        {output.component}
                    </>}
                </For>

                <Prompt />
            </div>
        </article>
    )
}