from django.db import models


class Task(models.Model):

    task_name = models.CharField(max_length=100, null=True)
    text = models.CharField(max_length=400, null=False)
    created_at = models.DateTimeField(auto_now_add=True, null=False)


    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return self.task_name
