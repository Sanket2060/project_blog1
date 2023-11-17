import {React,useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {Button,Input,Select,RTE} from '../index'
import  appwriteService from '../../appwrite/config' // import default hai toh kuch bhi import kar sakte
//naam se import kar sakte hai kya?->Haan default import ho toh aur koi naam se bhi import kar sakte hai
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service from '../../appwrite/config'
function PostForm({post}) {
  const userData=useSelector(state=>state.userData)  //whyn't state.userData??
  const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
    defaultValues:{   //default values to store for the current form
      title:post?.title || '',
      slug:post?.slug || '',
      content:post?.content || '',
      status:post?.status || 'active'
    }
  });
  const navigate= useNavigate();
  const submit=async (data)=>{      //form bata aako data as data parameter vanera lina ra use
    //garna milxa
    if (data){
      const file=data.image[0]?service.uploadFile(data.image[0]):null;
      file?service.deleteFile(data.featuredImage):null;
    const dbPost=await service.updatePost(post.$id,{...data,featuredImage:file?file.$id:undefined})
      if (dbPost){
        navigate(`/post/${dbPost.$id}`)
      }
    }else{
      const file=await service.uploadFile(data.image[0])  //file xa ki xaina vanera check
      //garera garey hunxa
      if (file){
        const fileId=file.$id;
       const dbPost=await service.createPost({...data,userId:userData.$id})
        navigate(`/post/${dbPost.$id}`)
      }
    }
  }

  const slugTransform=useCallback((value)=>{   //code to transform title to slug
    if (value && typeof value === "string")
    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

return "";
}, []);

useEffect(() => {       //code to actually change to slug(tara bujiyena)
  const subscription = watch((value, { name }) => {
      if (name === "title") {
          setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
  });
  return () => {
    subscription.unsubscribe();
  }
}, [watch,slugTransform,setValue])



  return (
    <>
     <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {              //slug ko input kasari change huni vanera
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                       //yo line bujiyena
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"          //type:file vayesi esle manage garxa
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}     //what does this !post do?It is a parameter
                    //passed
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full mt-12">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    </>
  )
}

export default PostForm