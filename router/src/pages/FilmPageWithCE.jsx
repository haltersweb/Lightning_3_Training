import { View, Text, For, setActiveElement } from "@lightningjs/solid";
import { onMount, createEffect, createSignal } from 'solid-js';
import { Column } from '@lightningjs/solid-primitives';
import { useParams, useNavigate } from '@solidjs/router';
 
const data = [
  {
   title: "Post 1",
   content: "Some content for post 1"
},
  {
   title: "Post 2",
   content: "Some content for post 2"
},
  {
   title: "Post 3",
   content: "Some content for post 3"
}
]
 
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  text: {
    fontSize: 40
  },
  title: {
    width: 1920,
    y: 20,
    fontSize: 40
  },
  content: {
    width: 1920,
    y: 540,
    fontSize: 40
  },
  instructions: {
    width: 1920,
    y: 1000,
    fontSize: 20,
    fontWeight: 'normal',
  },
}
 
export default function Post() {
  const navigate = useNavigate()
  const params = useParams()
  
  if (params.id) {
 
    let [post, setPost] = createSignal(data[params.id-1])
    
    createEffect(()=> {
      if (params.id > data.length) {
        navigate('/films/' + data.length)
        return
      } else if (params.id == 0) {
        navigate('/films/1')
        return
      }
      setPost(data[params.id-1])
    })
    
    return (<>
      <Text style={styles.instructions}>Press right or left arrows to cycle.</Text>
      {/* Column now has onRight and onLeft actions */}
      <Column autofocus onLeft={() => navigate('/films/' + (params.id-1))} onRight={() => navigate('/films/' + (parseInt(params.id)+1))}>
        <Text style={styles.title}>{post().title}</Text>
        <Text style={styles.content}>{post().content}</Text>
      </Column>
    </>)
 
  } else {
    // /posts
    return (<>
      <View style={styles.container}>
        <For each={data}>{post => <>
          <Text style={styles.text}>{post.title}</Text>
          <Text style={styles.text}>{post.content}</Text>
        </>
        }</For>
      </View>
    </>)
  }
 
}