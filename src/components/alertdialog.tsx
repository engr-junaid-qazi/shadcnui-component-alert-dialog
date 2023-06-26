import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="px-2 py-2 p text-lg font-medium
        text-center text-white bg-gray-400 hover:bg-gray-600 
        border-2 border-gray-800">
          Search Item </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>What do you want to search on this Page?</AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-black-800 
          font-bold">
            Please write down your search keyword in the box below!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <input placeholder="Write your search keyword here!" 
        className="px-2 py-2 p text-base font-medium"/>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Search</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
