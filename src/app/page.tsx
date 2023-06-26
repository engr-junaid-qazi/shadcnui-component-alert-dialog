import Image from 'next/image';
import {AlertDialogDemo} from '@/components/alertdialog';
import { type ClassValue } from 'clsx';

export default function Home() {
  return (
    <div className='text-center font-bold text-4xl'>
    <div>  
    <h1 className='text-red-600 underline 
    underline-offset-8'> Welcome to my Shadcn UI Alert Diaglog App </h1>
    <br/>
    </div>
    <AlertDialogDemo/>
    </div>
    )
}
