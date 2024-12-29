from django.db import models
from headless_cms.models import LocalizedTitleSlugModel, LocalizedDynamicFileModel
from headless_cms.fields import LocalizedMartorField
from localized_fields.fields import LocalizedCharField, LocalizedTextField
import reversion
from martor.models import MartorField


class PostImage(LocalizedDynamicFileModel):
    author = LocalizedCharField(blank=True, null=True, required=False)


@reversion.register(exclude=("published_version",))
class Post(LocalizedTitleSlugModel):
    excerpt = LocalizedTextField(blank=True, null=True, required=False)
    image = models.ForeignKey(
        PostImage,
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="posts",
    )
    draft = models.BooleanField(default=False)
    author = LocalizedCharField(blank=True, null=True, required=False)
    content = MartorField(blank=True, null=True)
    publish_date = models.DateTimeField(blank=True, null=True)
    updated_date = models.DateTimeField(auto_now=True)
