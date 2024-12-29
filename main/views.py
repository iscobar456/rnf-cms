from rest_framework.pagination import PageNumberPagination
from rest_framework.viewsets import ReadOnlyModelViewSet

from headless_cms.mixins import CMSSchemaMixin
from headless_cms.serializers import auto_serializer

from main.models import Post


class PostPaginator(PageNumberPagination):
    page_size = 10
    page_size_query_param = "size"


class PostViewSet(CMSSchemaMixin, ReadOnlyModelViewSet):
    queryset = Post.published_objects.published(auto_prefetch=True)
    serializer_class = auto_serializer(Post)
    pagination_class = PostPaginator
