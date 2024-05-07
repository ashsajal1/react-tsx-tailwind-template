import { PropsWithChildren, ReactNode } from "react";
import { motion } from 'framer-motion';

export interface DialogProps {
    isOpen: boolean;
    children: ReactNode;
}

export default function Dialog({ isOpen, children }: DialogProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 px-4 md:px-0 z-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
                whileTap={{ scale: 0.95 }}
                className="relative md:w-1/3 w-full min-h-[150px] rounded border dark:border-gray-800 bg-white flex flex-col justify-between p-4 dark:text-white dark:bg-black">
                {children}
            </motion.div>
        </div>
    );
}

export const Header = ({ children }: PropsWithChildren) => {
    return (
        <h3 className="text-xl font-bold">
            {children}
        </h3>
    );
};

export const Content = ({ children }: PropsWithChildren) => {
    return (
        <>
            {children}
        </>
    );
};

export const ActionButtons = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex items-center justify-end gap-2">
            {children}
        </div>
    );
};

Dialog.Header = Header;
Dialog.Content = Content;
Dialog.ActionButtons = ActionButtons;

// sample usage
{/* <Dialog isOpen={isOpen}>
    <Dialog.Header>Are you sure to delete the post?</Dialog.Header>
    <Dialog.Content>
        Please think again before delete
    </Dialog.Content>

    <Dialog.ActionButtons>
        <Button onClick={toggleOpen} variant="danger-outline">Cancel</Button>
        <Button variant="danger" onClick={toggleOpen}>Ok</Button>
    </Dialog.ActionButtons>
</Dialog>  */}