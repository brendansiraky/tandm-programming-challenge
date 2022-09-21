import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useUpdateComment } from '../../hooks/useUpdateComment' 

const commentSchema = yup.object({
    comment: yup.string().required().min(8).max(60),
}).required();

export const UpdateCommentModal = ({ documentId, initialComment, onUpdateComment }) => {
    const [
        handleUpdateComment,
        isLoading
    ] = useUpdateComment()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(commentSchema),
        defaultValues: {
            comment: initialComment
        }
    })

    function onSubmit(commentPayload) {
        handleUpdateComment(
            documentId,
            commentPayload
        ).then(() => onUpdateComment())
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <textarea {...register("comment")} placeholder="comment" rows={6} />
            <p>{errors.comment?.message}</p>
            <input type="submit" disabled={isLoading} />
        </form>
    )
}