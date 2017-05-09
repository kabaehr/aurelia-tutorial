function prev {
    . git checkout head^1
}

function next {
    . git checkout $(git rev-list --topo-order HEAD..9a367d9ba53cb211b34960d92f34fe9524c98ece | select-object -last 1)
}