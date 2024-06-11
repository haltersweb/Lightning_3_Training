import { View, Text, For } from "@lightningjs/solid";
import { createEffect, createSignal } from "solid-js";
import { Column } from "@lightningjs/solid-primitives";
import { useParams, useNavigate } from "@solidjs/router";

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
    }
  }

  export default function FilmPage() {
    const params = useParams(); // from solidjs router
    
    if (params.id) {
        return <Column>
            <Text style={styles.title}>{data[params.id].title}</Text>
            <Text style={styles.content}>{data[params.id].content}</Text>
        </Column>
    } else {
        return <View style={styles.container}>
            <For each={data}>
                {post => <>
                    <Text style={styles.text}>{post.title}</Text>
                    <Text style={styles.text}>{post.content}</Text>
                </>}
            </For>
        </View>
    }

  }