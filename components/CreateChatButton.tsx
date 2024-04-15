'use client'

import { MessageSquarePlusIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

function CreateChatButton() {
    const router = useRouter();
    const createNewChat = async () => {

        // logic
        router.push(`/chat/abc`)
    }
    return (
        <Button onClick={createNewChat} variant={'ghost'}><MessageSquarePlusIcon></MessageSquarePlusIcon></Button>
    )
}

export default CreateChatButton