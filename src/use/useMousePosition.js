import { reactive, onMounted, onUnmounted} from "vue";
export function useMousePosition() {
  // 封装对应的鼠标逻辑
  const position = reactive({
    x: 0,
    y: 0,
  });
  const useMousePosition = e => {
    position.x = e.clientX;
    position.y = e.clientY;
  }

  onMounted(() => {
    window.addEventListener('mousemove',useMousePosition);
  });

  

  onUnmounted(() => {
    //   window.removeEventListener
     window.removeEventListener('mousemove',useMousePosition);
  });

  return position;
}
