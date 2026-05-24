import { ref } from 'vue'

const selectedProjectId = ref(null)
const isDetailView = ref(false)

export function useProjectView() {
  function openProject(id) {
    selectedProjectId.value = id
    isDetailView.value = true
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  function closeProject() {
    isDetailView.value = false
    selectedProjectId.value = null
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return {
    selectedProjectId,
    isDetailView,
    openProject,
    closeProject,
  }
}
