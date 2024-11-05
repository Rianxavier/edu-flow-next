import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";

export interface DefaultModalRef {
    open: () => void;
    close: () => void;
}

interface DefaultModalProps {
    children: JSX.Element | JSX.Element[]
    onCloseShadow?: boolean
}

export const DefaultModal = forwardRef((props: DefaultModalProps, ref: ForwardedRef<DefaultModalRef>) => {
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false)
    }), [])

    const handleShadowClick = () => {
        if (props.onCloseShadow)
            return setVisible(false)
    }

    return visible && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50" onClick={handleShadowClick}>
            <div className="bg-white rounded-lg p-6 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
})