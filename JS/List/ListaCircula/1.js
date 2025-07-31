if (value === current.value) {
    temp = current.next
    current.next = new Nodo(value)
    current.next.next = temp
    current.next.back = current
    return
}