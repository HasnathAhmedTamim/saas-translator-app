
import React from 'react'
import Logo from './Logo'
import DarkModeToggle from './ui/DarkModeToggle'
import UserButton from './ui/UserButton'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Link from 'next/link'
import { MessageSquareIcon } from 'lucide-react'
import CreateChatButton from './CreateChatButton'


async function Header() {
    const session = await getServerSession(authOptions)
    console.log(session)
    return (
        <header className='sticky top-0 z-50 bg-white dark:bg-gray-900'>
            <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto'>
                <Logo></Logo>
                <div className='flex-1 flex items-center justify-end space-x-4'>
                    {/* language select */}

                    {session ? (
                        <>
                            <Link href={'/chat'} prefetch={false}>
                                <MessageSquareIcon className='text-black dark:text-white'></MessageSquareIcon>
                            </Link>
                            <CreateChatButton></CreateChatButton>

                        </>
                    ) : (
                        <Link href='/pricing'>Pricing</Link>
                    )}

                    {/* darkMode toggle */}
                    <DarkModeToggle></DarkModeToggle>

                    {/* UserButton */}
                    <UserButton session={session}></UserButton>

                </div>

            </nav>
            {/* upgrade banner */}
        </header>
    )
}

export default Header