function prev {
    . git checkout head^1
}

function next {
    $finalSha = get-content .\head.sha1
    . git checkout $(git rev-list --topo-order HEAD..$finalSha | select-object -last 1)
}