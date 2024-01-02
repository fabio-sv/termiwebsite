import { commands } from "../data/commands"

export const Help = () => <p>Usage: [command] [options] <br />
    <br />

    {commands.map(cmd => cmd.name).filter(cmd => cmd !== 'help').sort().join(', ')} <br /> <br />
</p>